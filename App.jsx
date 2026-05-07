import React, { useEffect, useState } from "react";

export default function App() {

  const [opened, setOpened] = useState(false);
  const [guestName, setGuestName] = useState("");

  const weddingDate = new Date("2026-05-28T16:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {

        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
          ),
          seconds: Math.floor(
            (distance % (1000 * 60)) / 1000
          ),
        });

      }

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="page">

      {/* Glitter */}

      <div className="glitter-wrapper">

        {[...Array(45)].map((_, i) => (

          <span
            key={i}
            className="glitter"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />

        ))}

      </div>

      {/* Intro */}

      {!opened && (

        <div className="overlay">

          <div className="introCard">

            <div className="corner topLeft">🌿</div>
            <div className="corner topRight">💜</div>
            <div className="corner bottomLeft">🌸</div>
            <div className="corner bottomRight">💐</div>

            <div className="ring">
              💍
            </div>

            <h1 className="heroTitle">
              Sam & Jenita
            </h1>

            <p className="heroSubtitle">
              ROYAL WEDDING INVITATION
            </p>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="nameInput"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />

            <button
              className="openButton"
              onClick={() => setOpened(true)}
            >
              OPEN INVITATION
            </button>

          </div>

        </div>

      )}

      {/* Main Invitation */}

      {opened && (

        <div className="mainContainer">

          <div className="inviteCard">

            <div className="goldGlow"></div>

            <h2 className="welcomeText">
              Welcome <span>{guestName || "Guest"}</span>
            </h2>

            <div className="divider"></div>

            <h1 className="mainHeading">
              Wedding Invitation
            </h1>

            <p className="verse">
              “He has made everything beautiful in its time.”
            </p>

            <div className="hostSection">

              <h3>V.J. Baskaran</h3>

              <p>M.A., P.G.D.P.M.</p>

              <p>
                Media Executive, Dinamalar — Nagai
              </p>

              <div className="andText">&</div>

              <h3>Hannah Baskaran</h3>

              <p>M.Sc., M.Ed.</p>

              <p>
                Principal, J.Jeya Matric Hr.Sec School
              </p>

            </div>

            <p className="inviteText">
              Cordially solicit your esteemed
              presence and blessings with your
              family and friends on the joyful
              occasion of the Holy Matrimony
              of their beloved son
            </p>

            <div className="coupleSection">

              <h1 className="name">
                Sam Sathyan
              </h1>

              <p className="qualification">
                B.Tech., M.S (Engg) U.K
              </p>

              <p>
                Asst. Project Manager,
                Mynor Enterprises Pvt Ltd., Nagai
              </p>

              <div className="withText">
                with
              </div>

              <h1 className="name">
                Jenita Evangeline
              </h1>

              <p className="qualification">
                B.Com., MSW
              </p>

              <p>
                D/o Rev. Dr. K. Stephen Umapathy
                & Mrs. Hepzibah Bala Jesi Stephen
              </p>

            </div>

            {/* Countdown */}

            <div className="countdownSection">

              <div className="countBox">
                <h3>{timeLeft.days}</h3>
                <p>Days</p>
              </div>

              <div className="countBox">
                <h3>{timeLeft.hours}</h3>
                <p>Hours</p>
              </div>

              <div className="countBox">
                <h3>{timeLeft.minutes}</h3>
                <p>Minutes</p>
              </div>

              <div className="countBox">
                <h3>{timeLeft.seconds}</h3>
                <p>Seconds</p>
              </div>

            </div>

            {/* Event */}

            <div className="eventCard">

              <h3>
                Holy Matrimony
              </h3>

              <p>
                Thursday, 28th May 2026
              </p>

              <p>
                4:00 PM
              </p>

              <p>
                T.E.L.C Lutheran Trinity Church,
                Nagapattinam
              </p>

              <a
                href="https://maps.google.com/?q=TELC+Lutheran+Trinity+Church+Nagapattinam"
                target="_blank"
                rel="noreferrer"
                className="mapButton"
              >
                View Church Location
              </a>

            </div>

            <div className="eventCard">

              <h3>
                Wedding Reception
              </h3>

              <p>
                Thursday, 28th May 2026
              </p>

              <p>
                6:00 PM onwards
              </p>

              <p>
                Thalapathy Arivalayam,
                Kadambadi, Nagapattinam
              </p>

              <a
                href="https://maps.google.com/?q=Thalapathy+Arivalayam+Nagapattinam"
                target="_blank"
                rel="noreferrer"
                className="mapButton"
              >
                View Reception Hall
              </a>

            </div>

            <div className="footer">

              <p>
                With Best Compliments from
              </p>

              <h3>
                B. Kevin
              </h3>

              <p>
                Relatives & Friends
              </p>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}
