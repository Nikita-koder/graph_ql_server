"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedByUpdatedBy = void 0;
const CreatedByUpdatedBy = async ({ root, args, context, info }, next) => {
    var _a;
    const userUid = ((_a = context === null || context === void 0 ? void 0 : context.user) === null || _a === void 0 ? void 0 : _a.username) || null;
    // Если это мутация createOne или updateOne, то добавляем поля createdBy, updatedBy
    // Если это мутация updateOne, то добавляем поле updatedBy
    if (info.parentType.name === "Mutation") {
        if (info.fieldName.startsWith("createOne")) {
            args.data.createdBy_uid = userUid;
            args.data.updatedBy_uid = userUid;
        }
        if (info.fieldName.startsWith("updateOne")) {
            args.data.updatedBy_uid = { "set": userUid };
        }
        if (info.fieldName.startsWith("deleteOne")) {
            args.data = { updatedBy_uid: userUid };
        }
        //console.log(`CreatedByUpdatedBy: userUid: ${userUid}: args: ${JSON.stringify(args)}, fieldName: ${info.fieldName}`);
        return next();
    }
    return next();
};
exports.CreatedByUpdatedBy = CreatedByUpdatedBy;
// export const LogAccess: MiddlewareFn<Context> = ({ context, info }, next) => {
//     const username: string = context.user?.username || "guest";
//     console.log(`Logging access: ${username} -> ${info.parentType.name}.${info.fieldName}`);
//     return next();
// };
module.exports = { CreatedByUpdatedBy: exports.CreatedByUpdatedBy };
