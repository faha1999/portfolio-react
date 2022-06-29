import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../AllSvgs';

const Card = styled.li`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.body};

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};

  ${Card}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  ${Card}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled(NavLink)`
  ${Card}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

export const WorkCard = (props) => {
  const { id, name, description, tags, demo, github } = props.data;

  return (
    <Card className="WorkCard" key={id}>
      <h2 className="title">{name}</h2>
      <h2 className="description">{description}</h2>

      <Tags className="Tags">
        {tags.map((t, id) => {
          return <span key={id}>#{t}</span>;
        })}
      </Tags>

      <footer>
        <Link className="navLink" to={{ pathname: `${demo}` }} target="_blank">
          Visit
        </Link>

        <Git className="git" to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </footer>
    </Card>
  );
};
