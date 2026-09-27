# 今日訓練

手機優先的深色健身課表，純 HTML、CSS、JavaScript，沒有安裝或編譯步驟。

## 使用

直接開啟 `index.html` 可查看。正式使用建議透過 GitHub Pages，以便穩定保存瀏覽器進度。

- 預設顯示台灣時間的今天，可切換星期。
- 三項訓練自由選擇順序；每個群組選一個器材，再按「開始此項」。
- 完成後勾選「標記完成」，可取消；不會自動開始下一項。
- 已完成項目的器材選項鎖定，取消完成後可重新選擇。
- 只保存當天各星期的進度，台灣時間換日全部清除，切回今天。
- 不記錄組數進度、重量、歷史，不需登入。
- 資料保存在目前瀏覽器 localStorage，不跨裝置同步。停用儲存時顯示提示。
- 週一羽球、週二與週日休息；重訓日提醒快走 2 公里。

## GitHub Pages

1. 建立 GitHub repository。
2. 將本資料夾內的 `index.html`、`.nojekyll`、`README.md`、`workout_plan.md` 上傳至 repository 根目錄，不要只上傳 ZIP。
3. 在 repository 的 Settings → Pages 選擇從分支發布，選擇 main 與根目錄，儲存。
4. 發布完成後，使用 Pages 提供的網址。

所有資源內嵌於 index.html，支援 repository 子路徑，不依賴 CDN。課表公開；本機進度不會送到 GitHub。

## 課表來源

`workout_plan.md` 包含原始 86 項動作與 12 個固定群組。網頁資料定義在 index.html 的 PLAN 常數內。修改 Markdown 不會自動改變網頁，需同步更新 PLAN。

## 驗證

已以 JavaScript 執行檢查七天畫面產生、保存後重新載入、各星期隔離、非順序項目、完成狀態與台灣跨日重設。執行環境無可用瀏覽器，尚未完成真實瀏覽器的觸控及視覺驗證。選用的 WebMCP 唯讀進度工具採能力偵測，未在支援該 API 的瀏覽器驗證；一般操作不依賴它。
