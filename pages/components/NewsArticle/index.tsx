import * as React from 'react';
import styled from 'styled-components';

export interface NewsArticleProps {
	title: string;
	subTitle?: string;
	date?: string;
	content?: string;
}

const Header = styled.h1``;

const NewsArticle: React.SFC<NewsArticleProps> = (props) => {
	const { title, subTitle, date, content } = props;

	return <div />;
};

export default NewsArticle;
