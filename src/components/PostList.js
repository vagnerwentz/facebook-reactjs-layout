import React, { Component } from 'react';

import ProfileLolo from '../assets/profile-lolo.jpg'

import PostItem from './PostItem';

class PostList extends Component {
    state= {
        posts: [
            {
                id: 1,
                author: {
                    name: 'Vagner Wentz',
                    avatar: "https://avatars3.githubusercontent.com/u/26815672?s=400&u=4523985fe51eda4eebc170221cb99aa0ae713c8a&v=4"
                },
                date: '12 Mar 2020',
                content: 'Pessoal, hoje é meu aniversário, meu sonho é Rocketseat me presentear com um MacBook Pro',
                comments: [
                    {
                        id: 2,
                        author: {
                            name: 'Diego Fernandes',
                            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
                        },
                        date: '12 Mar 2020',
                        content: 
                            'Parabéns Vagner! A Rocketseat te deseja um Feliz Aniversário' + 
                            ', me passe seu email, e veremos a possibilidade do presente.'
                    }
                ]
            },
            {
                id: 3,
                author: {
                    name: 'Bruna Eloisa',
                    avatar: ProfileLolo
                },
                date: '02 Mar 2020',
                content: 'Bom dia amigos! Hoje comecei minha faculdade, vocês recomendariam o Launch Base da Rocketseat?',
                comments: [
                    {
                        id: 4,
                        author: {
                            name: 'Vinicios Wentz',
                            avatar: 'https://avatars0.githubusercontent.com/u/9222432?s=400&v=4'
                        },
                        date: '04 Mar 2020',
                        content: 'Sim Bruna, é super recomendado, você aprende do zero a programação desta maravilhosa Stack, mas sou team TypeScript!'
                    },
                    {
                        id: 5,
                        author: {
                            name: 'Carlos Vitor Bordalo',
                            avatar: 'https://avatars2.githubusercontent.com/u/54056008?s=400&v=4'
                        },
                        date: '03 Mar 2020',
                        content: 
                            'Muito mais do que recomendado,' + 
                            ' participei do primeiro LaunchBase e fiz o GoStack, e se você focar, o mercado é seu! Lança o foguete!'
                    },
                ]   
            },
            {
                id: 6,
                author: {
                    name: 'Rocketseat Brasil',
                    avatar: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4'
                },
                date: '02 Mar 2020',
                content: 'Fomos considerado a melhor empresa de aprendizado na área da tecnologia! Parabéns a todos devs e professores! Vem surpresa vindo.',
                comments: [
                    {
                        id: 7,
                        author: {
                            name: 'Vagner Wentz',
                            avatar: "https://avatars3.githubusercontent.com/u/26815672?s=400&u=4523985fe51eda4eebc170221cb99aa0ae713c8a&v=4"
                        },
                        date: '02 Mar 2020',
                        content: 
                            'Parabéns Rocketseat! Vocês são mestres!'
                    }
                ]
            },
        ]
    };

    render() {
        const { posts } = this.state;
        return(
            <div className="postlist">
                {posts.map(post => (
                    <PostItem key={post.id} {...post}/>
                ))}
            </div>
        )
    }
}

export default PostList;