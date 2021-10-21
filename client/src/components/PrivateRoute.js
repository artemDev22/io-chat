import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({
                          component: Component,
                          ...rest
                      }) => {
    const authorization = useSelector(state => state)

    return (
        <Route
            {...rest}
            component={() => {
                if (!authorization.auth.name) {
                    return <Redirect to="/login" />;
                }

                return (
                    <Route
                        {...rest}
                        component={Component}
                    />
                );
            }
            }
        />
    )
};

export default PrivateRoute;