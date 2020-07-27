/**
 * Author : rajansingh
 * Created On : 27/07/20
 */
import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import s from "./Button.module.scss"

const Button = (props) => {
  const { children, onClick, id = Math.random(), type, styleClass, containerClass } = props
  const onBtnClick = () => {
    if (type === "hamburger") {
      document.getElementById(id).classList.toggle(s.active)
    }
    onClick()
  }

  return (
    <div className={cx({[containerClass]: containerClass})}>
      <button
        className={cx({ [s.hamburger]: type === "hamburger", [styleClass]: styleClass })}
        onClick={onBtnClick}
        id={id}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  styleClass: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
