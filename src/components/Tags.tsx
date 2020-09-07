/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * A component for rendering a tag corresponding to
 * the passed props. It can render a list of tags if the
 * `all` props is passed
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ntags = {
  webpack: {
    bg: "#8ED5FA",
    color: "#1C78C0",
  },
  python: {
    bg: "#FFD43B",
    color: "#306998",
  },
  javascript: {
    bg: "#f0db4f",
    color: "#323330",
  },
  typescript: {
    bg: "#007acc",
    color: "#ffffff",
  },
  react: {
    bg: "#20232a",
    color: "#61dafb",
  },
  gatsby: {
    bg: "#663399",
    color: "#ffffff",
  },
};

type Tags = keyof typeof ntags;

interface TagProps {
  bg?: string;
  color?: string;
}

const Tag = styled(Link)<TagProps>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  background: ${(props): string => (props.bg ? props.bg : `var(--color-text)`)};
  color: ${(props): string => (props.color ? props.color : `var(--color-bg)`)};
  border-radius: 4px;
  &:hover {
    filter: brightness(0.9);
  }
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

interface PostTagsProps {
  tags: string[];
}

const PostTags: React.FC<PostTagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map(tag => {
        if (tag in ntags) {
          return (
            <Tag
              to={`/tags/${tag}`}
              // @ts-ignore
              bg={ntags[tag].bg}
              // @ts-ignore
              color={ntags[tag].color}
            >
              {tag}
            </Tag>
          );
        }

        return (
          <Tag to={`/tags/${tag}`} key={tag}>
            {tag}
          </Tag>
        );
      })}
    </>
  );
};

export default PostTags;
