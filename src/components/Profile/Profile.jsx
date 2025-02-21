import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image }) {
  return (
    <div className={css.container}>
      <div className={css.foto}>
        <img src={image} alt="User avatar" />
      </div>
      <p className={css.text}>{name}</p>
      <p className={css.info}>@{tag}</p>
      <p className={css.info}>{location}</p>
    </div>
  );
}
