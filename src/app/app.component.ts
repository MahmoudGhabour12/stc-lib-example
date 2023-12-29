import { Component, OnInit } from '@angular/core';
import { MukDynamicButtonsComponent } from 'ngx-mui-kit/components/muk-dynamic-buttons';
import { IButton } from 'ngx-mui-kit/components/muk-button';
import { COLUMN, IColumn } from 'ngx-mui-kit/components/muk-table';
import { ButtonTypes } from 'ngx-mui-kit/components/muk-button';
import { MukTableComponent } from 'ngx-mui-kit/components/muk-table';
import { ICard, MukCardsComponent } from 'ngx-mui-kit/components/muk-cards';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MukCardsComponent, MukDynamicButtonsComponent, MukTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ngx-mui-kit-crud';

  columns: IColumn[] = [];
  tableData: {
    name: string;
    phone: string;
    email: string;
  }[] = [];

  buttons: IButton[] = [];

  cardData: ICard = {};
  ngOnInit() {
    this.columns = [
      {
        name: 'Name',
        type: COLUMN.text,
        propName: 'name',
        multiDenominational: true,
      },
      {
        name: 'Phone',
        type: COLUMN.text,
        propName: 'phone',
      },
      {
        name: 'Email',
        type: COLUMN.text,
        propName: 'email',
      },
    ];

    this.buttons = [
      {
        color: 'primary',
        matType: ButtonTypes.raised,
        text: 'First button',
        buttonType: 'button',
        icon: 'home',
      },
      {
        color: 'accent',
        matType: ButtonTypes.flat,
        text: 'Second button',
        buttonType: 'button',
        icon: 'add',
      },
      {
        color: 'warn',
        matType: ButtonTypes.basic,
        text: 'Third button',
        buttonType: 'button',
        icon: 'search',
      },
    ];

    this.tableData = [
      {
        name: 'mahmoud',
        phone: '0122211111',
        email: 'mmm@gmail.com',
      },
      {
        name: 'ahmed',
        phone: '0235666332',
        email: 'ahmed@gmail.com',
      },
      {
        name: 'mohamed',
        phone: '0100000550',
        email: 'mohamed@gmail.com',
      },
      {
        name: 'mahmoud',
        phone: '0122211111',
        email: 'mmm@gmail.com',
      },
      {
        name: 'ahmed',
        phone: '0235666332',
        email: 'ahmed@gmail.com',
      },
      {
        name: 'mohamed',
        phone: '0100000550',
        email: 'mohamed@gmail.com',
      },
      {
        name: 'mahmoud',
        phone: '0122211111',
        email: 'mmm@gmail.com',
      },
      {
        name: 'ahmed',
        phone: '0235666332',
        email: 'ahmed@gmail.com',
      },
      {
        name: 'mohamed',
        phone: '0100000550',
        email: 'mohamed@gmail.com',
      },
    ];

    this.cardData = {
      title: 'Muk Card Title',
      subtitle: 'Muk Card Subtitle',
      image: 'https://via.placeholder.com/150',
      alt: 'Card image',
      buttons: [
        {
          text: 'Add',
          icon: 'add',
          color: 'primary',
          matType: ButtonTypes.raised,
          buttonType: 'button',
          clicked(value) {
            console.log('Added clicked', value);
          },
        },
        {
          text: 'Delete',
          icon: 'delete',
          color: 'warn',
          matType: ButtonTypes.raised,
          buttonType: 'button',
          clicked(value) {
            console.log('Deleted clicked', value);
          },
        },
      ],
    };
  }
}
