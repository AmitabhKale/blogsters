import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Container,
  Form,
  Row,
  Col,
  FormGroup,
} from "react-bootstrap";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBlog, reset } from "../features/blogs/blogSlice";

const NewBlogPage = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescrption] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [moreinfo, setMoreinfo] = useState(``);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.blogs
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      dispatch(reset);
      navigate("/");
    }

    dispatch(reset);
  }, [dispatch, isError, isSuccess, navigate, message]);

  const submitHandler = (e) => {
    e.preventDefault();

    const blogData = {
      title,
      subTitle,
      description,
      imageUrl,
      moreinfo,
    };

    dispatch(createBlog(blogData));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="my-3">
      <Container>
        <Alert>You Can Use Markdown Input to detailed Writing Article</Alert>

        <Form onSubmit={submitHandler}>
          <Row>
            <Col lg={6}>
              <Form.Group
                className="p-1 mb-3 border"
                controlId="formBasicEmail"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="Enter Title"
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group
                className="p-1 mb-3 border"
                controlId="formBasicEmail"
              >
                <Form.Label>Sub Heading</Form.Label>
                <Form.Control
                  type="text"
                  value={subTitle}
                  onChange={(e) => {
                    setSubTitle(e.target.value);
                  }}
                  placeholder="Enter SubHeading"
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group
                className="p-1 mb-3 border"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => {
                    setDescrption(e.target.value);
                  }}
                  placeholder="Enter Short Description"
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <FormGroup>
                <Form.Control
                  type="text"
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                  }}
                  placeholder="Enter Image Url"
                  required
                />
              </FormGroup>
              {/* <Form.Group controlId="formFile" className="mb-3 border">
                <Form.Control className="px-2" type="file" />
              </Form.Group> */}
            </Col>
            <Col>
              <Form.Group
                className="p-1 mb-3 bg-light"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={9}
                  value={moreinfo}
                  onChange={(e) => {
                    setMoreinfo(e.target.value);
                  }}
                  placeholder="Enter More Info"
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit" variant="success">
                  Publish Blog
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default NewBlogPage;
