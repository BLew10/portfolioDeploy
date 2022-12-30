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
        "As a student at Pleasant Grove High School, I was fortunate to have the opportunity to play varsity football for three years. However, I also faced several injuries during this time, two resutling in season-ending surgeries. Despite these setbacks, I worked hard to return to my previous level of athletic performance and earned a full-ride scholarship to the University of Washington Football Program."
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
        "While at the University of Washington, I was a member of the football team that won the Pac-12 Championship and reached the College Football Playoff Final in 2016. I also received All-Academic Pac-12 First Team Honors during the 2015 season. Unfortunately, my football career came to an end after a fifth surgery in 2017."
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
        "After my athletic career ended, I served as a football recruiting assistant to the Director of Player Personnel at the University of Washington. During my two years in this role, our recruiting classes ranked among the top 20 in the country. I graduated with a Bachelor's degree in Mathematics and began preparing for a career in medicine."
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
        "Before applying to medical school, I spent a year as a Medical Scribe in the Emergency Department. During the application process, I received multiple full-tuition scholarships and ultimately chose to attend the Kaiser Permanente School of Medicine. "
    },
    {
      date: {
        from: 2021,
        to: 2022
      },
      role: "Medical Student",
      company: " Kaiser Permanete Bernard J. Tyson School of Medicine",
      location: "Pasadena, CA",
      content:
        "Although my time in medical school was brief, it was a rewarding experience. I enjoyed practicing medicine and being part of the medical community, but ultimately I realized that my true passion lay elsewhere. I valued fulfillment, relationships, and time. Medicine didn't fit what I wanted to my life to look like. Tech, was a field I had always admired from afar ever since taking a computer science course during undergrad. That passion that I had After much reflection and discussion, I decided to pivot towards a career in technology."
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
        `I am now excited to be embarking on a career as a Full-Stack Engineer, and feel grateful to have my passion and career intersecting at this point in my journey. All of the challenges and experiences I have encountered along the way have led me to where I am today, and I am looking forward to what the future holds.
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
      <div className="" ref={scrollArea}>
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