import { QueryParams, SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next";
import { getClient } from "../sanity/lib/client";
import { token } from "../sanity/lib/token";
import { POSTS_SLUG_QUERY, POST_QUERY } from "../sanity/lib/queries";
import Post from "@/components/Post";
import { useRouter } from "next/router";

const PostPreview = dynamic(() => import("@/components/PostPreview"));

type PageProps = {
  post: SanityDocument | null;
  params: QueryParams;
  draftMode: boolean;
  token: string;
};

export default function SinglePost({ post, draftMode }: PageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return draftMode ? <PostPreview post={post} /> : <Post post={post} />;
}

export const getStaticProps: GetStaticProps = async ({
  params = {},
  draftMode = false,
}) => {
  const client = getClient(draftMode ? token : undefined);
  const post = await client.fetch<SanityDocument>(POST_QUERY, params);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      params,
      draftMode,
      token: draftMode ? token : "",
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getClient().fetch(POSTS_SLUG_QUERY);

  return { paths, fallback: true };
};
