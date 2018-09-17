import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector:'[appEffect]'
})
export class ReactionDirective {
  @HostBinding('class.hoverblock') isHovered = false;

  @HostListener('mouseover') onMouseOver() {
    this.isHovered = true;
  }
  @HostListener('mouseout') onMouseOut() {
    this.isHovered = false;
  }
}