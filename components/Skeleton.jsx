export default function Skeleton(){return <div className="skeleton">{Array.from({length:12}).map((_,i)=><div className="sk" key={i}/>)}</div>}
