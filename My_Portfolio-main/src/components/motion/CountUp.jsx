// Shows the final number immediately. The previous count-up started at 00,
// so a quick glance (or a stalled animation) read as "1 project, 0 demos".
export default function CountUp({ to, pad = 2 }) {
  return <span className="tabular-nums">{String(to).padStart(pad, '0')}</span>
}
