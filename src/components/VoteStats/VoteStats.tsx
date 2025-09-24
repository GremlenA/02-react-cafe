
import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

export interface VoteStatsProps {
  votes: Votes; 
}

export default function VoteStats({ votes }: VoteStatsProps) {
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.container}>
      <p className={css.stat}>Good: <strong>{votes.good}</strong></p>
      <p className={css.stat}>Neutral: <strong>{votes.neutral}</strong></p>
      <p className={css.stat}>Bad: <strong>{votes.bad}</strong></p>
      <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
      <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
    </div>
  );
}
