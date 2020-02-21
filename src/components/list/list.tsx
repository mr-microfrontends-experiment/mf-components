import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'mf-list',
  styleUrl: 'list.css',
  shadow: true,
})
export class List {
  @Prop() public items: Array<any> = [];
  @Prop() public formatter: (item: any) => string = item => `Default formatter: ${JSON.stringify(item)}`;

  @Event() public outClickedItem: EventEmitter;

  render() {
    return (
      <Host>
        <ul>
          {this.items.map(item => (
            <li onClick={() => this.outClickedItem.emit(item)}>{this.formatter(item)}</li>
          ))}
        </ul>
      </Host>
    );
  }
}
