import { Menu } from 'antd';
import { BookOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

interface AntiNextMenuProps {
    activeKeys: string[]
}

function AntiNextMenu(props: AntiNextMenuProps) {
    const items: MenuProps['items'] = [
        {
            label: 'Portfolio',
            key: '',
            icon: <HomeOutlined />,
            disabled: false,
        },
        {
            label: 'Blog',
            key: 'blog',
            icon: <BookOutlined />,
            disabled: true,
        },
    ]

    const onClick: MenuProps['onClick'] = e => {
        console.log(`/${e.key}`);
        if (props.activeKeys.includes(e.key)) {
            return;
        }
        window.location.href = `/${e.key}`
    };

    return <Menu theme={"dark"} onClick={onClick} selectedKeys={props.activeKeys} mode="horizontal" items={items} />
}

export default AntiNextMenu;