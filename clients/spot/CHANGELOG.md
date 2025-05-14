# Changelog

## 5.0.0 - 2025-05-14

### Added

- Support streams for `userDataStreamSubscribe()` Websocket endpoint.

```typescript
const res = await connection.userDataStreamSubscribe();
const response = res.response;

const data = response.data;
console.log('userDataStreamSubscribe() response:', data);

const stream = res.stream;
stream.on('message', (data) => {
    console.log('userDataStreamSubscribe() stream data:', data);
});
```

### Changed

- Updated `@binance/common` library to version `1.0.4`.
- Updated response types.
- Updated request parameters to correctly specify their required status.

## 4.0.0 - 2025-04-28

### Changed

- Removed `apiKey` from `userDataStream.subscribe` and `userDataStream.unsubscribe` Websocket endpoints.
- Updated response types.

## 3.0.0 - 2025-04-25

### Changed

- Updated enums for General and Trade APIs.

## 2.0.0 - 2025-04-10

### Added

- Add Order Amend Keep Priority endpoint:
  - `PUT /api/v3/order/amend/keepPriority`

### Changed

- Update `@binance/common` library to version `1.0.2`.
- Update request parameters to correctly specify parameter types and their required status.
- Update response types to support multiple interfaces where they are available.
- Update examples.

### Removed

- Remove unused error reponses.

## 1.0.1 - 2025-04-07

- Update `@binance/common` library to version `1.0.1`.

## 1.0.0 - 2025-03-24

- Initial release
