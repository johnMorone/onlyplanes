// Based on: https://codepen.io/okua/pen/PoYOqxW

import React from "react";


export interface PostProps {
  message: React.ReactElement;
  imageSrc?: string;
  numLikes: number;
  timePosted: number;
  children?: React.ReactElement;
}

export function Post(props: PostProps) {
  const { message, imageSrc, numLikes, timePosted, children } = props;

  return (
    <div className="tw-block-parent">
      <div className="timeline-PostList-post">
        <div className="timeline-Post">
          <div className="timeline-Post-author">
            <div className="PostAuthor"><a className="PostAuthor-link" href="#channel"> </a><img className="PostAuthor-avatar" src="/profile192.png" />
            <span className="PostAuthor-name">6900XT </span><span
              className="Icon Icon--verified"> </span><span className="PostAuthor-screenName">@6900XT </span></div>
          </div>
          <div className="timeline-Post-content">
            {children}
            {imageSrc && <a className="timeline-Post-image" href={imageSrc} target="_blank"><img src={imageSrc}/></a>}
            <div className="timeline-Post-text">{message}</div>
          </div>
          <div className="timeline-Post-metadata"><span className="timeline-Post-timestamp">{timePosted}h</span></div>
          <ul className="timeline-Post-actions">
            <li className="timeline-Post-action"><a className="Icon Icon--heart" href="#"></a>{numLikes}</li>
            <li className="timeline-Post-action"><a className="Icon Icon--share" href="#"></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


