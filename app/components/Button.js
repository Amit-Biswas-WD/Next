"use client";

function Button() {
  return (
    <div className="my-6">
      <button
        onClick={() => console.log("click me")}
        className="bg-green-500 rounded-sm p-4"
      >
        Click Here
      </button>
    </div>
  );
}

export default Button;
