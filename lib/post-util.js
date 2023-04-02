//here functions will be written that take data from makrdown file and trnasform them.
//markdown file has content and meeta data so we need another package to read that data from markdo
//npm install gray-matter -> install this to read metadta and content in markdown file


import fs from 'fs';
import path from 'path';
// this is installed using npm install gray-matter, for reading markdown file
import matter from 'gray-matter';

//path.join (first arguemnt procees.cwd. which will take us to base directory path. means when go in folder of project at that base path)
//after than give filder name to go into it.
//now postsDirectory is on posts folder
const postsDirectory = path.join(process.cwd(), 'posts');

//so that we can use in another place where we just need filenames
export function getPostsFiles() {
  //it will read all directory means string of files (could be many files in posts folder.)
  return fs.readdirSync(postsDirectory);
}


// it will return post data
//post indentifies that we get from single post will be filename(slug)without extension and here as compklete filename with extension
export function getPostData(postIdentifier) {
  // here we are removing filename extension which will be used as a slug. agar extension hue remove hojaege, nae hue to wesy he removed hoge
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  //as postsDirectory is now in posts folder, second argument is actual file name(we get as argument). now it will be exact file path
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  // to read file content synchronsly, first argument file path , second file systems
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  // matter is from gray-matter we installed for reading markdown. it gives meta data as object in data and actual content in content
  const { data, content } = matter(fileContent);




  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  //return postdata
  return postData;
}

//
export function getAllPosts() {
    //it will read all directory means string of files (could be many files in posts folder.)
  const postFiles = getPostsFiles();
    // so ther could be many file, so map each file and return each file data using getpostdata and passing path of each file to getpost data
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });
  //this will sort posts
  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
}

// function to select featured posts having is featured key
export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  //the posts which have isfeatured key true will be returned in const
  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}