import React from 'react';
import { View, Button } from 'react-native';

/**
 * Criar componente de fallback que ao receber um erro do clique no botao, 
 * vai exibir na tela uma mensagem de "Ops Falhei"
 */

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Atualiza o state para que a próxima renderização mostre a UI alternativa.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('teste');
    }

    render() {
        if (this.state.hasError) {
            console.log('Possui error');
            return (
                <Text>Erro</Text>
            );
        }
        return this.props.children;
    }
}

class ErrorMessage extends React.Component {
    render() {
        return (<Text>{this.props.message ? this.props.message : 'Erro desconhecido'}</Text>)
    }
}

class Children extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { hasError: false };
    }

    handleClick = () => {
        this.setState({ hasError: true });
    };

    render() {
        
        if (this.state.hasError) {
            
            throw new Error('Boom');
        }

        return (
            <Button
                title="Botao"
                onPress={this.handleClick}
            />
        );
    }
}

const App = () => {
    return (
        <View>
            <ErrorBoundary>
                <Children />
            </ErrorBoundary>
        </View>
    );
};

export default App;
