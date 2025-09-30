
"use client"
import Countdown, { CountdownRenderProps } from "react-countdown";

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
        // Render a complete state
        return <AfterComplete />;
    } else {
        // Render a countdown
        return (
            <div className="d-flex gap-3 flex-wrap mt-4 mb-0 gy-xxl-0 gy-3 justify-content-center" id="timer">
                <div>
                    <div className="">
                        <p className="mb-1 text-fixed-white fw-medium">DAYS</p>
                        <h4 className="mb-0 avatar d-block bg-success avatar-xl mt-2 backdrop-blur">{days}</h4>
                    </div>
                </div>
                <div>
                    <div className="">
                        <p className="mb-1 text-fixed-white fw-medium">HOURS</p>
                        <h4 className="mb-0 avatar d-block bg-info avatar-xl mt-2 backdrop-blur">{hours}</h4>
                    </div>
                </div>
                <div>
                    <div className="">
                        <p className="mb-1 text-fixed-white fw-medium">MINUTES</p>
                        <h4 className="mb-0 avatar d-block bg-warning avatar-xl mt-2 backdrop-blur">{minutes}</h4>
                    </div>
                </div>
                <div>
                    <div className="">
                        <p className="mb-1 text-fixed-white fw-medium">SECONDS</p>
                        <h4 className="mb-0 avatar d-block bg-danger avatar-xl mt-2 backdrop-blur">{seconds}</h4>
                    </div>
                </div>
            </div>
        );
    }
};

export function DayCounter() {
    return (<Countdown date={Date.now() + 15599999990} renderer={rendering} />);
}
