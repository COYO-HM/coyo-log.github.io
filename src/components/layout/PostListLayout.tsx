import { DEFAULT_NUMBER_OF_POST } from "@src/constants";
import { PostType } from "@src/type";
import PostBox from "@components/common/PostBox";
import Pagination from "@components/common/Pagination";
import usePage from "@hooks/usePage";

const PostListLayout = ({
  title,
  posts,
  currPage,
  path,
}: {
  title: string;
  posts: PostType[];
  currPage: number;
  path: string;
}) => {
  const { startPage, endPage } = usePage(posts.length, currPage);
  const showPosts = posts.slice(
    currPage * DEFAULT_NUMBER_OF_POST,
    (currPage + 1) * DEFAULT_NUMBER_OF_POST
  );

  return (
    <>
      <span className={`font-bold py-3 pl-1 text-2xl`}>{title}</span>
      <article className={`flex flex-col flex-nowrap gap-3`}>
        {showPosts.map(({ frontMatter, fields: { slug } }) => (
          <PostBox {...frontMatter} slug={slug} key={slug} />
        ))}
      </article>
      <Pagination
        currPage={currPage}
        path={path}
        startPage={startPage}
        endPage={endPage}
      />
    </>
  );
};

export default PostListLayout;
