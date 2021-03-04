// =============================================================================
// Video Graph Component
// (c) Mathigon
// =============================================================================


import {$N, CustomElementView, ElementView, register, SVGParentView, SVGView, Draggable, animate, ease} from '@mathigon/boost';
import { Point } from '@mathigon/euclid';
import {lerp, clamp} from '@mathigon/fermat';
import { CoordinateSystem, Step, Video } from '../types';

const avatarSize = 32;

@register('x-video-graph')
export class VideoGraph extends CustomElementView {
    private $video: Video;
    private $videoEl: Node;
    private $graph: CoordinateSystem;
    private $avatar: SVGView;

    ready() {
        this.$video = this.$('x-video')! as Video;
        this.$videoEl = this.$video.$('video')?._el! as Node;
        this.$graph = this.$('x-coordinate-system')! as CoordinateSystem;
        this.$avatar = $N('g', {}, this.$graph.$svg.$('.overlay')!) as SVGView;

        $N('circle', {r: 4}, this.$avatar);
    }

    setFunctions(xFunction: (t: number) => number, yFunction: (t: number) => number) {
        this.$graph.setFunctions(yFunction);

        const setAvatarPosition = (t: number) => {
            const x = xFunction(t);
            const y = yFunction(x);
            const athletePoint = this.$graph.toViewportCoords(new Point(x, y));

            this.$avatar.setAttr('transform', `translate(${athletePoint.x}, ${athletePoint.y})`);
        }

        this.$video.on('timeupdate', () => {
            const t: number = this.$videoEl.currentTime;
            setAvatarPosition(t);
        });

        setAvatarPosition(0);
    }

    setAvatar(path: string) {
        this.$avatar.removeChildren();
        $N('image', {href: path, transform: `translate(${-avatarSize/2}, ${-avatarSize/2})`, width: avatarSize, height: avatarSize}, this.$avatar);
    }
}
