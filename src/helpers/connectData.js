import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
/*
  hoistNonReactStatic ，hoist-non-react-statics：从一个子组件到父组件的非 react 的明确的静态副本。
  类似于 object 分派，但从 react 静态关键词黑名单开始覆盖
*/
/*
  connectData：当这个 decorator 被使用，它必须是第一个（最外层）的函数。
  否则，我们不能找到和调用这个 fetchData 和 fetchDataDeffered 方法
*/

export default function connectData(fetchData, fetchDataDeferred) {

  return function wrapWithFetchData(WrappedComponent) {

    class ConnectData extends Component {
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    ConnectData.fetchData = fetchData;
    ConnectData.fetchDataDeferred = fetchDataDeferred;

    return hoistNonReactStatic(ConnectData, WrappedComponent);
  };
}
