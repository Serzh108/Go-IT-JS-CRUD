import services from '../../services/services';
import postListItem from '../../templates/postListItem.hbs';
import './PostList.css';
// async var
async function getPostsAndAddInDomList() {
  try {
    const res = await services.getPosts();
    // console.dir(res);
    // const list = res.data.reduce((acc, el) => acc + postListItem(el), ''); // если axios
    const list = res.reduce((acc, el) => acc + postListItem(el), '');
    services.refs.List.insertAdjacentHTML('beforeend', list);
    services.refs.List.classList.add("PostList-list");
  } catch (err) {
    console.warn(err);
  }
}
getPostsAndAddInDomList();
// fetch var
// function getPostsAndAddInDomList() {
//   services.getPosts().then(res => {
//     console.table(res);
//     const list = res.reduce((acc, el) => acc + postListItem(el), '');
//     // const list = res.map(el => postListItem(el)).join('');
//     services.refs.List.insertAdjacentHTML("beforeend", list);
//   }).catch(err => console.warn(err));
// };
