// Based on: https://codepen.io/okua/pen/PoYOqxW

import React from "react";


export interface PostProps {
  message: React.ReactElement;
  imageSrc?: string;
  numLikes: number;
  timePosted: number;
}

export function Post(props: PostProps) {
  const { message, imageSrc, numLikes, timePosted } = props;

  return (
    <div className="tw-block-parent">
      <div className="timeline-PostList-post">
        <div className="timeline-Post">
          <div className="timeline-Post-brand">
            <div className="Icon Icon--twitter"></div>
          </div>
          <div className="timeline-Post-author">
            <div className="PostAuthor"><a className="PostAuthor-link" href="#channel"> </a><span
              className="PostAuthor-avatar">
            <div className="Avatar"> </div></span><span className="PostAuthor-name">TwitterDev </span><span
              className="Icon Icon--verified"> </span><span className="PostAuthor-screenName">@TwitterDev </span></div>
          </div>
          <div className="timeline-Post-image"><img src={imageSrc}/></div>
          <div className="timeline-Post-text">{message}</div>
          <div className="timeline-Post-metadata"><span className="timeline-Post-timestamp">{timePosted}h</span></div>
          <ul className="timeline-Post-actions">
            <li className="timeline-Post-action"><a className="Icon Icon--heart" href="#">{numLikes}</a></li>
            <li className="timeline-Post-action"><a className="Icon Icon--share" href="#"></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


