import React, { Component } from 'react'

export class ShopItem extends Component {
    constructor(entity) {
        Object.assign(
            this,
            {
                brand: '',
                title: '',
                description: '',
                descriptionFull: '',
                price: 0,
                currency: '£'
            },
            entity
        )

    }
}