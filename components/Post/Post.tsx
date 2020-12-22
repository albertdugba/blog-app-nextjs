import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Title } from "../Section/style";

export const Post: FunctionComponent = () => {
  return (
    <Link href="post/[id]" as="/post/example" passHref>
      <Card>
        <Figure>
          <img src="image1" alt="Post Photo" />
        </Figure>
        <Title>Post title</Title>
        <Content>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            obcaecati delectus veritatis impedit sequi fugiat debitis atque ad
            dignissimos doloremque?
          </p>
        </Content>
      </Card>
    </Link>
  );
};
