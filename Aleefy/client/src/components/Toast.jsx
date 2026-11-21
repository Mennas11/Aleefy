function Toast() {
  return (
    <div
      className="toast align-items-center toast-custom border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">
          Check out our 50% discounts!
        </div>

        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  )
}

export default Toast