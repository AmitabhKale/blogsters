const mongoose = require("mongoose");
const slugify = require("slugify");
const marked = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const dompurify = createDomPurify(new JSDOM().window);

const blogSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    moreinfo: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
    },
    readTime: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    sanitizedHTML: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    comments: [],
  },
  {
    timestamps: true,
  }
);

blogSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  if (this.moreinfo) {
    this.sanitizedHTML = dompurify.sanitize(marked.parse(this.moreinfo));
  }

  next();
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
