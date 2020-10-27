import React, { useCallback, useState } from 'react';

import PageTemplate from '../../components/PageTemplate';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import { Form } from './styles';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('trying to submit');
    console.log(name, email, subject, message);
  }, [name, email, subject, message]);

  return (
    <PageTemplate>
      <p>Envie um email para contato.artesexatas@gmail.com ou preencha o formulário abaixo.</p>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Assunto"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <TextArea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button type="submit">
          Enviar
        </Button>
      </Form>
    </PageTemplate>
  );
};

export default ContactPage;
