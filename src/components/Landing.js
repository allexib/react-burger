import React from 'react';

class Landing extends React.Component {
    render() {
        return (
            <div>
                <div className='restaurant_select'>
                    <div className='restaurant_select_top'>
                        <div className='restaurant_select_top-header'>Выбери ресторан</div>
                        <div className='arrow_picker'>
                            <div className='arrow_picker-up'></div>
                            <div className='arrow_picker-down'></div>
                        </div>
                    </div>
                    <div className='restaurant_select_bottom'>
                        <ul>
                            <li>rest 1</li>
                            <li>rest 2</li>
                            <li>rest 3</li>
                        </ul>
                    </div>
                </div>
                <button>Перейти в ресторан</button>
            </div>
        );
    }
}

export default Landing;