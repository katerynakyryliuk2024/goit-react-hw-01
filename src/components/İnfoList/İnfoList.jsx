import css from "./İnfoList.module.css";

export default function İnfoList({ followers, views, likes }) {
  return (
    <div>
      <ul className={css.section}>
        <li className={css.part}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.part}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.part}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
