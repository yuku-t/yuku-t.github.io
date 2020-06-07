import React, { FC } from "react"
import cn from "classnames"

interface IProps {
  className?: string
  head: React.ReactNode
  left: React.ReactNode
  description?: React.ReactNode
}

const Item: FC<IProps> = (props) => (
  <div className={cn("timeline-item", props.className)}>
    <div className="head">{props.head}</div>
    <div className="left">{props.left}</div>
    {props.description && <div className="description">{props.description}</div>}
  </div>
)

export default Item
