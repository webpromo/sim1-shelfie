

UPDATE products
set name = $2, price =$3, img=$4
WHERE id = $1
returning *;