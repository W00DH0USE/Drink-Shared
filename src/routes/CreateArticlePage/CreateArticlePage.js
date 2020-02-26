import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import CreateArticleForm from '../../components/CreateArticleForm/CreateArticleForm'

export default class CreateArticlePage extends Component {

  render() {
    return (
      <Section className='CreateArticlePage'>
        <h2>Create Recipe</h2>
        <CreateArticleForm />
      </Section>
    )
  }
}