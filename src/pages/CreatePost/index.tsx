import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

import PageTemplate from '../../components/PageTemplate';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Form } from './styles';

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

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(title, readingTimeInMinutes, tags);
    console.log(content);
    history.push('/admin');
  }, [title, readingTimeInMinutes, tags, content, history]);

  return (
    <PageTemplate>
      <h1>Criar um novo post</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            value={title}
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            value={readingTimeInMinutes}
            placeholder="Tempo de Leitura em minutos"
            onChange={(e) => setReadingTimeInMinutes(e.target.value)}
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="Tags"
            hint="Insira as tags separadas por vírgula."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <Input
            type="link"
            value={link}
            placeholder="URL"
            hint="Opcional - pode ser uma imagem ou um video."
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

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

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </PageTemplate>
  );
};

export default CreatePost;
