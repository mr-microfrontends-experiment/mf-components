import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'mf-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Prop() public disabled: boolean = false;

  @Event() outClick: EventEmitter;

  public render() {
    return (
      <Host>
        <button class="button" type="button" disabled={this.disabled} onClick={this.handleClick.bind(this)}>
          <slot>Default label</slot>
        </button>
      </Host>
    );
  }

  private handleClick(): void {
    this.outClick.emit();
  }
}
