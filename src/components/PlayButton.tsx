import "./PlayButton.css"

function PlayButton({ playAction }: PlayButtonProps) {
  return (
    <button className="playBut" onClick={playAction}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // x="0px"
        // y="0px"
        width="4em"
        height="4em"
        viewBox="0 0 213.7 213.7"
        enableBackground="new 0 0 213.7 213.7"
        xmlSpace="preserve"
      >
        <polygon
          className="triangle"
          id="XMLID_18_"
          fill="none"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          points="
	73.5,62.5 148.5,105.8 73.5,149.1 "
        />
        <circle
          className="circle"
          id="XMLID_17_"
          fill="none"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          cx="106.8"
          cy="106.8"
          r="103.3"
        />
      </svg>
    </button>
  )
}

type PlayButtonProps = {
  playAction: () => void
}

export default PlayButton
