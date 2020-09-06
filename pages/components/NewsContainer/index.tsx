import * as React from 'react';
import styled from 'styled-components';
import NewsArticle, { NewsArticleProps } from '../NewsArticle';

export interface NewsContainerProps {
	newsArticles: NewsArticleProps[];
}

const Container = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const NewsContainer: React.SF<NewsContainerProps> = ({ newsArticles }) => {
	return (
		<Container>
			{() => {
				return newsArticles.map((article: NewsArticleProps) => {
					return <NewsArticle key={article.title} {...article} />;
				});
			}}
		</Container>
	);
};

export default NewsContainer;
