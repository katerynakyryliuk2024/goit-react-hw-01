import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead className={css.head}>
        <tr>
          <th className={css.headEl}>Type</th>
          <th className={css.headEl}>Amount</th>
          <th className={css.headEl}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.formBody}>
        {items.map((item) => {
          console.log(item);
          <tr key={item.id}>
            <td className={css.cell}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}
