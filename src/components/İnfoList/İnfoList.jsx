import css from "./İnfoList.module.css";

export default function İnfoList({ followers, views, likes }) {
  return (
    <div>
      <ul className={css.section}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
