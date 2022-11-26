import React, { useLayoutEffect } from 'react'
import "./timeline.css"

const MyStory = () => {
  const events = [
    {
      date: {
        from: 2010,
        to: 2014
      },
      role: "Student-Athlete | Football ",
      company: "Pleasant Grove High School",
      location: "Elk Grove, CA",
      content:
        "I had the privilege of being a varsity player for three years. During that time, I had three career altering injuries, two of which led to surgery. I battled back to return to the athlete I previous was and earned a full-ride scholarship to the University of Washington Football Program."
    },
    {
      date: {
        from: 2014,
        to: 2017
      },
      role: "Student-Athlete | Football ",
      company: "University of Washington",
      location: "Seattle, WA",
      content:
        "While at the University of Washington, our team won the Pac-12 Championship and were College Football Playoff Finalist in 2016. Individually, I was able to earn All-Academic Pac-12 First Team Honors during the 2015 season. My football career unfortunately ended after a fifth surgery in 2017."
    },
    {
      date: {
        from: 2017,
        to: 2019
      },
      role: "Football Recruiting Assistant",
      company: "University of Washington",
      location: "Seattle, WA",
      content:
        "Following my athletic career, I served as a football recruiting assistant to the Director of Player Personnel. The recruiting classes during my two year stint were among the top 20 in the country. I was able to graduate with a 3.45 GPA, BA in Mathematics and began pursuing a future as a physician. "
    },
    {
      date: {
        from: 2019,
        to: 2021
      },
      role: "Medical School Application Process",
      company: "Medical College Admissions Test (MCAT) Score: 514 (89th Percentile)",
      location: "Sacramento, CA",
      content:
        "Prior to applying, I spent a year as a Medical Scribe in the Emergency Department. During the application process, I receiveed multiple full-tuition scholarships and ultimately decided to attend Kaiser Permanente School of Medicine. "
    },
    {
      date: {
        from: 2021,
        to: 2022
      },
      role: "Medical Student",
      company: "Bernard J. Tyson School of Medicine",
      location: "Pasadena, CA",
      content:
        "Although cut short, my experience in medical school was an incredible one. I thoroughly enjoyed the practice of medicine and the community I shared it with. However, there was an itch that medicine did not scratch. I could no longer justify the sacrifice to become a physician due to the lack of true passion for field. After many months of thought and discussion, I decided to pivot into tech."
    },
    {
      date: {
        from: 2022,
        to: "Present"
      },
      role: "Full-Stack Engineer",
      company: "Open to Work",
      location: "Sacramento, CA",
      content:
        `It has been amazing to have my passion and career intertwine. All the obstacles, roads, and lessons have led me to where I am today and I'm excited for what's to come.
        `
    },

  ];


  const isBrowser = typeof window !== `undefined`;

  const getScrollPosition = ({ element, useWindow }) => {
    if (!isBrowser) return { x: 0, y: 0 };

    const target = element ? element.current : document.body;
    const position = target.getBoundingClientRect();

    return useWindow
      ? { x: window.scrollX, y: window.scrollY }
      : { x: position.left, y: position.top };
  };

  const useScrollPosition = (effect, deps, element, useWindow, wait) => {
    const position = React.useRef(getScrollPosition({ useWindow }));

    let throttleTimeout = null;

    const callBack = () => {
      const currPos = getScrollPosition({ element, useWindow });
      effect({ prevPos: position.current, currPos });
      position.current = currPos;
      throttleTimeout = null;
    };

    React.useLayoutEffect(() => {
      const handleScroll = () => {
        if (wait) {
          if (throttleTimeout === null) {
            throttleTimeout = setTimeout(callBack, wait);
          }
        } else {
          callBack();
        }
      };

      // add for reflow or reposition on resize or scroll
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }, deps);
  };

  // Event Item
  const EventItem = (props) => {
    const timeItem = React.useRef();
    const [isVisible, setIsVisible] = React.useState(false);

    const checkElement = (el) => {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    React.useEffect(() => {
      setIsVisible(checkElement(timeItem.current));
    }, []);

    useScrollPosition(({ currPos }) => {
      setIsVisible(checkElement(timeItem.current));
    });
    const { date, content, role, company, location } = props;
    return (
      <li ref={timeItem} className={isVisible ? "inView" : null}>
        <div>
          <time>
            {date.from} - {date.to}
          </time>
          <h4 className="title font-bold">{role}</h4>
          <h3 className="company font-semibold border-t-[1px]  border-b-[1px]  border-[#4C3831] my-2 ">{company}</h3>
          <p>
            <i className='my-2 location font-semibold flex items-center justify-center' >  <img className="w-[20px]" src="https://img.icons8.com/dotty/80/4C3831/map-pin.png"/>{location}</i>
          </p>
          <p className="description">{content}</p>
        </div>
      </li>
    );
  };

  // Timeline
  const Timeline = (props) => {
    const scrollArea = React.useRef();

    const makeTimeline = (events) => {
      const evlist = props.events.map((item) => {
        return (
          <EventItem
            date={item.date}
            content={item.content}
            role={item.role}
            company={item.company}
            location={item.location}
            key={`${item.time}`}
          />
        );
      });
      return <ul>{evlist}</ul>;
    };

    return (
      <div className="bg-white" ref={scrollArea}>
        <section className="header">
          <div className="container">
            <h1 className='italic border-b-2 border-[#4C3831]'>My Story
              </h1>

          </div>
        </section>

        <section className="timeline">
          <ul>{makeTimeline(events)}</ul>
        </section>
      </div>
    );
  };

  return (
    <Timeline events={events} />
  )
}

export default MyStory