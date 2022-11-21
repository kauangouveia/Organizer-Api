const apiResponse = ({
    success = true,
    message = "",
    payload = {},
    errors = [],
}) => ({
    success,
    message,
    payload,
    errors,
});

export function ok(res, payload = {}) {
    return res.status(200).json(
        apiResponse({
            message: "Operação realizada com sucesso",
            payload,
        })
    );
}

export function badRequestWithErrors(res, message, errors) {
    return res.status(400).json(apiResponse({ message, errors }));
}

export function notFound(res, message) {
    return res.status(404).json(apiResponse({ message }));
}
