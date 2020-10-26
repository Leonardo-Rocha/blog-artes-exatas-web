import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiTag } from 'react-icons/fi';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player';

import loadFullPost from '../../services/loadFullPost';
import FullPost from '../../interfaces/fullPost';

import { Info, Banner } from './styles';
import PageTemplate from '../../components/PageTemplate';

interface Params {
  id: string;
}

const PostPage: React.FC = () => {
  const [post, setPost] = useState<FullPost>({
    id: 1,
    title: 'COMO ESCOLHER AS PEÇAS PARA O SEU PC - O Guia Definitivo',
    content: '<h1>Pequeno teste contendo algumas tags HTML!</h1> <p>S&oacute; '
      + 'quero saber se o uso das tags nn vai zoar a apresenta&ccedil;&atilde;o '
      + 'em react. <br /><br /><span style="background-color: #34495e;">const '
      + '[var, setVar] = useState&lt;type&gt;(initialValue);</span></p>',
    createdAt: '24/10/2020',
    updatedAt: '24/10/2020',
    readingTimeInMinutes: 0,
    tags: ['Tutorial', 'Computadores'],
    videoUrl: 'https://www.youtube.com/watch?v=DGQA4gxjLr8',
    // imageUrl: 'http://static.zerochan.net/NHK.ni.Youkoso!.full.812105.jpg',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { id } = useParams<Params>();

  useEffect(() => {
    // loadFullPost(Number(id)).then((postResponse) => {
    //   if (postResponse) {
    //     setPost(postResponse);
    //   } else {
    //     setErrorMessage('Ops, algum erro ocorreu. Post não encontrado.');
    //   }
    // });
  }, [id]);

  return (
    <PageTemplate>
      {errorMessage.length > 0 && (
        <p>errorMessage</p>
      )}

      <Banner>
        {post.videoUrl
          ? (
            <ReactPlayer
              url={post.videoUrl}
              width="100%"
            />
          )
          : (post.imageUrl && (
            <img src={post.imageUrl as string} alt="cover" />
          ))}
      </Banner>

      <h1>{post.title}</h1>

      <Info>
        {post.createdAt}
        {' '}
        - Leitura de
        {' '}
        {post.readingTimeInMinutes}
        min |
        {' '}
        <FiTag />
        {' '}
        {post.tags.map((tag) => `#${tag} `)}
      </Info>

      {parse(post.content)}
    </PageTemplate>
  );
};

export default PostPage;
