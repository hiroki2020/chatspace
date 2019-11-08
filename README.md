## messageテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :group

## userテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|
### Association
- belongs_to :groups_users
- has_many :message

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|message_id|string|null: false, foreign_key: true|

### Association
- belongs_to :group,:user

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :group,:user
