import React, { useCallback, useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { Content } from './styles';
import loadFullPost from '../../services/loadFullPost';

interface Props {
  id?: number;
}

const CreatePost: React.FC<Props> = ({ id }) => {
  const [title, setTitle] = useState('');
  const [readingTimeInMinutes, setReadingTimeInMinutes] = useState('');
  const [tags, setTags] = useState('');
  const [link, setLink] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  // useEffect(() => {
  //   loadFullPost();
  // }, [id]);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(title, readingTimeInMinutes, tags);
    console.log(content);
    history.push('/admin');
  }, [title, readingTimeInMinutes, tags, content, history]);

  return (
    <Container>
      <Header />

      <Content>
        <h1>Criar um novo post</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col xs={10}>
              <Form.Group controlId="title" id="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="readingTimeInMinutes">
                <Form.Label>Tempo de Leitura</Form.Label>
                <Form.Control
                  value={readingTimeInMinutes}
                  onChange={(e) => setReadingTimeInMinutes(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Insira as tags separadas por vírgula.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="link">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                  type="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Este campo é opcional.
                </Form.Text>
              </Form.Group>
            </Col>
          </Form.Row>

          <Editor
            apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor |'
                + 'alignleft aligncenter alignright alignjustify |'
                + 'code | link |'
                + 'bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={(value) => setContent(value)}
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreatePost;
