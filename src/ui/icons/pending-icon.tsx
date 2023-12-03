import type { SVGAttributes } from 'react';
import React from 'react';

type Props = SVGAttributes<SVGElement>;

export function PendingIcon(props: Props) {
  return (
    <svg viewBox="0 -18 512 511" {...props}>
      <path d="m417.1875 201.421875v-163.132813c0-20.835937-16.953125-37.789062-37.789062-37.789062h-341.609376c-20.835937 0-37.789062 16.953125-37.789062 37.789062v341.609376c0 20.839843 16.953125 37.789062 37.789062 37.789062h219.992188c25.644531 34.875 66.949219 57.550781 113.457031 57.550781 77.617188 0 140.761719-63.144531 140.761719-140.761719 0-61.535156-39.691406-113.964843-94.8125-133.054687zm-245.703125-170.160156h74.21875v84.910156l-31.402344-12.546875c-3.664062-1.460938-7.75-1.460938-11.414062 0l-31.402344 12.546875zm-133.695313 355.664062c-3.875 0-7.027343-3.152343-7.027343-7.027343v-341.609376c0-3.875 3.152343-7.027343 7.027343-7.027343h102.9375v107.621093c0 5.101563 2.53125 9.871094 6.753907 12.734376 4.226562 2.859374 9.59375 3.441406 14.332031 1.546874l46.78125-18.691406 46.785156 18.691406c1.839844.734376 3.777344 1.097657 5.703125 1.097657 3.03125 0 6.042969-.898438 8.628907-2.644531 4.222656-2.863282 6.753906-7.632813 6.753906-12.734376v-107.621093h102.933594c3.875 0 7.027343 3.152343 7.027343 7.027343v156.246094c-4.988281-.539062-10.054687-.820312-15.1875-.820312-77.617187 0-140.761719 63.144531-140.761719 140.761718 0 18.53125 3.605469 36.230469 10.140626 52.449219zm333.449219 57.550781c-60.65625 0-110-49.347656-110-110 0-60.65625 49.34375-110 110-110 60.652344 0 110 49.34375 110 110 0 60.652344-49.347656 110-110 110zm0 0" />
      <path d="m427.242188 320.121094h-41.648438v-41.648438c0-8.496094-6.886719-15.382812-15.382812-15.382812-8.492188 0-15.378907 6.886718-15.378907 15.382812v57.03125c0 8.492188 6.886719 15.378906 15.378907 15.378906h57.03125c8.496093 0 15.382812-6.886718 15.382812-15.378906 0-8.496094-6.886719-15.382812-15.382812-15.382812zm0 0" />
    </svg>
  );
}